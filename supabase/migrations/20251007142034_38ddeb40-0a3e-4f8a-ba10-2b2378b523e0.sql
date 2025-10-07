-- Create function to delete user account
CREATE OR REPLACE FUNCTION public.delete_user_account()
RETURNS void
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  -- Delete the user from auth.users (this will cascade to profiles, projects, and tasks)
  DELETE FROM auth.users WHERE id = auth.uid();
END;
$$;