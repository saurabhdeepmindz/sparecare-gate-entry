export const config = { matcher: '/((?!favicon.ico).*)' };

export default function middleware(request) {
  const expected = process.env.SITE_PASSWORD;
  if (!expected) return;

  const auth = request.headers.get('authorization');
  if (auth) {
    const [scheme, encoded] = auth.split(' ');
    if (scheme === 'Basic' && encoded) {
      const [, password] = atob(encoded).split(':');
      if (password === expected) return;
    }
  }

  return new Response('Authentication required', {
    status: 401,
    headers: { 'WWW-Authenticate': 'Basic realm="SpareCare Wireframes"' },
  });
}
