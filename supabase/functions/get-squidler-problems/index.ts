import "https://deno.land/x/xhr@0.1.0/mod.ts";
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    console.log('get-squidler-problems: Request received');

    const squidlerApiKey = Deno.env.get('SQUIDLER_API_KEY');
    if (!squidlerApiKey) {
      console.error('get-squidler-problems: SQUIDLER_API_KEY not configured');
      return new Response(
        JSON.stringify({ error: 'Squidler API key not configured' }),
        { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    const { limit = 50, offset = 0, suiteType } = await req.json();
    console.log('get-squidler-problems: Parameters received', { limit, offset, suiteType });

    // Build query parameters
    const params = new URLSearchParams({
      limit: limit.toString(),
      offset: offset.toString(),
    });

    if (suiteType) {
      params.append('suiteType', suiteType);
    }

    const apiUrl = `https://api.dev.squidler.io/api/problems?${params.toString()}`;
    console.log('get-squidler-problems: Calling Squidler API', apiUrl);

    const response = await fetch(apiUrl, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${squidlerApiKey}`,
        'Content-Type': 'application/json',
      },
    });

    console.log('get-squidler-problems: Squidler API response status', response.status);

    if (!response.ok) {
      const errorText = await response.text();
      console.error('get-squidler-problems: Squidler API error', { status: response.status, error: errorText });
      return new Response(
        JSON.stringify({ error: 'Failed to fetch problems from Squidler', details: errorText }),
        { status: response.status, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    const data = await response.json();
    console.log('get-squidler-problems: Successfully fetched problems', { totalProblems: data.totalProblems });

    return new Response(JSON.stringify(data), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('get-squidler-problems: Unexpected error', error);
    const errorMessage = error instanceof Error ? error.message : 'Internal server error';
    return new Response(
      JSON.stringify({ error: errorMessage }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }
});
