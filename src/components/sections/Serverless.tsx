import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Serverless = () => {
  return (
    <section id="serverless" className="section-padding bg-muted/30">
      <div className="container max-w-4xl">
        <h2 className="mb-8">Serverless Function Deployment</h2>
        <Card>
          <CardHeader>
            <CardTitle>Deploying a "Hello World" Function</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                <Badge variant="default">Attempt Overview</Badge>
              </h3>
              <p className="text-muted-foreground mb-4">
                I created a Netlify Function to respond with "Hello World" when invoked. Here's what I did:
              </p>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-foreground mb-2">1. Created the Function</h4>
                  <p className="text-muted-foreground mb-2">
                    Created <code className="bg-code-bg text-code-foreground px-2 py-1 rounded">netlify/functions/hello.js</code>:
                  </p>
                  <pre className="text-sm">
{`exports.handler = async (event, context) => {
  return {
    statusCode: 200,
    body: JSON.stringify({ message: "Hello World!" })
  };
};`}
                  </pre>
                </div>

                <div>
                  <h4 className="font-semibold text-foreground mb-2">2. Configured netlify.toml</h4>
                  <p className="text-muted-foreground mb-2">
                    Added function directory to <code className="bg-code-bg text-code-foreground px-2 py-1 rounded">netlify.toml</code>:
                  </p>
                  <pre className="text-sm">
{`[functions]
  directory = "netlify/functions"`}
                  </pre>
                </div>

                <div>
                  <h4 className="font-semibold text-foreground mb-2">3. Deployed and Tested</h4>
                  <p className="text-muted-foreground">
                    Pushed to GitHub, which triggered an automatic Netlify deployment. The function became available at:
                  </p>
                  <pre className="text-sm mt-2">
{`https://your-site.netlify.app/.netlify/functions/hello`}
                  </pre>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                <Badge variant="outline">Result & Troubleshooting</Badge>
              </h3>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  <strong className="text-foreground">Initial Issue:</strong> On first deploy, the function returned a 500 error. 
                  Checking the function logs in the Netlify dashboard, I saw: <code className="bg-code-bg text-code-foreground px-2 py-1 rounded">Cannot find module</code>.
                </p>
                <p>
                  <strong className="text-foreground">Root Cause:</strong> I had imported a npm package but forgot to include it in package.json dependencies.
                </p>
                <p>
                  <strong className="text-foreground">Solution:</strong> Added the missing dependency, committed, and redeployed. The function then worked perfectly, 
                  returning the expected JSON response.
                </p>
                <p>
                  <strong className="text-foreground">Key Learning:</strong> Netlify functions need all dependencies explicitly declared, 
                  and the function logs are invaluable for debugging – they showed the exact error that would've been hard to catch otherwise.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Serverless;
