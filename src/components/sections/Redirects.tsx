import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Redirects = () => {
  return (
    <section id="redirect" className="section-padding">
      <div className="container max-w-4xl">
        <h2 className="mb-8">Redirect Rules</h2>
        <div className="grid gap-6">
          <Card>
            <CardHeader>
              <CardTitle>301 Redirect to Google Search</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                To set up a 301 redirect from <code className="bg-code-bg text-code-foreground px-2 py-1 rounded">/netlify/anything</code> to Google search, 
                create or edit a <code className="bg-code-bg text-code-foreground px-2 py-1 rounded">_redirects</code> file in your publish directory:
              </p>
              <pre className="text-sm">
{`/netlify/:query  https://www.google.com/search?q=:query  301`}
              </pre>
              <p className="text-muted-foreground">
                This uses a splat/placeholder <code className="bg-code-bg text-code-foreground px-2 py-1 rounded">:query</code> to capture whatever comes after <code className="bg-code-bg text-code-foreground px-2 py-1 rounded">/netlify/</code> and 
                passes it to Google's search parameter. The <code className="bg-code-bg text-code-foreground px-2 py-1 rounded">301</code> indicates a permanent redirect, 
                which is important for SEO and tells browsers/search engines the content has permanently moved.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Proxy Redirect Rule</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                A proxy redirect allows you to keep the URL as <code className="bg-code-bg text-code-foreground px-2 py-1 rounded">/netlify/anything</code> while 
                serving content from Google, hiding the actual destination from the user:
              </p>
              <pre className="text-sm">
{`/netlify/:query  https://www.google.com/search?q=:query  200`}
              </pre>
              <p className="text-muted-foreground">
                Using status code <code className="bg-code-bg text-code-foreground px-2 py-1 rounded">200</code> instead of <code className="bg-code-bg text-code-foreground px-2 py-1 rounded">301</code> makes 
                this a proxy. The user's browser shows <code className="bg-code-bg text-code-foreground px-2 py-1 rounded">yoursite.com/netlify/something</code> in 
                the address bar, but the content comes from Google's search results.
              </p>
              <div className="p-4 bg-muted/50 rounded-lg">
                <p className="text-sm text-muted-foreground">
                  <strong className="text-foreground">Note:</strong> Proxying to external domains like Google may not work reliably due to CORS policies 
                  and external site configurations. This technique works best for proxying your own APIs or services you control.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Redirects;
