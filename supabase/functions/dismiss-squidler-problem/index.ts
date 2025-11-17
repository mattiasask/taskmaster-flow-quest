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
    console.log('dismiss-squidler-problem: Request received');

    const squidlerApiKey = Deno.env.get('SQUIDLER_API_KEY');
    if (!squidlerApiKey) {
      console.error('dismiss-squidler-problem: SQUIDLER_API_KEY not configured');
      return new Response(
        JSON.stringify({ error: 'Squidler API key not configured' }),
        { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    const { problemId } = await req.json();
    
    if (!problemId) {
      console.error('dismiss-squidler-problem: problemId is required');
      return new Response(
        JSON.stringify({ error: 'problemId is required' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    console.log('dismiss-squidler-problem: Dismissing problem', { problemId });

    const apiUrl = `https://api.dev.squidler.io/api/problems/${problemId}/dismiss`;
    console.log('dismiss-squidler-problem: Calling Squidler API', apiUrl);

    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${squidlerApiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ problemId }),
    });

    console.log('dismiss-squidler-problem: Squidler API response status', response.status);

    if (!response.ok) {
      const errorText = await response.text();
      console.error('dismiss-squidler-problem: Squidler API error', { status: response.status, error: errorText });
      return new Response(
        JSON.stringify({ error: 'Failed to dismiss problem', details: errorText }),
        { status: response.status, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    const data = await response.json();
    console.log('dismiss-squidler-problem: Successfully dismissed problem', { problemId });

    return new Response(JSON.stringify(data), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('dismiss-squidler-problem: Unexpected error', error);
    const errorMessage = error instanceof Error ? error.message : 'Internal server error';
    return new Response(
      JSON.stringify({ error: errorMessage }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }
});
