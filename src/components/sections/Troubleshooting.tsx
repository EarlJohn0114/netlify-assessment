import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Troubleshooting = () => {
  return (
    <section id="troubleshoot" className="section-padding bg-muted/30">
      <div className="container max-w-4xl">
        <h2 className="mb-8">Troubleshooting Build Failure</h2>
        <Card>
          <CardHeader>
            <CardTitle>Scenario: "My site won't build"</CardTitle>
            <p className="text-sm text-muted-foreground mt-2">
              Build log shows: <code className="bg-code-bg text-code-foreground px-2 py-1 rounded">Build failed due to a user error: Build script returned non-zero exit code: 2</code>
            </p>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                <Badge variant="default">My Troubleshooting Process</Badge>
              </h3>
              <ol className="space-y-3 text-muted-foreground ml-4">
                <li className="flex gap-3">
                  <span className="font-bold text-primary shrink-0">1.</span>
                  <div>
                    <span className="font-semibold text-foreground">Check the full build log</span> - Exit code 2 is generic, but the log usually shows what command failed. 
                    I'd look for the actual error message (missing dependency, syntax error, failed test, etc.).
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="font-bold text-primary shrink-0">2.</span>
                  <div>
                    <span className="font-semibold text-foreground">Review recent commits</span> - Check if there were recent changes to package.json, build scripts, or configuration files.
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="font-bold text-primary shrink-0">3.</span>
                  <div>
                    <span className="font-semibold text-foreground">Verify build settings</span> - Ensure the build command and publish directory in Netlify match what's in the project.
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="font-bold text-primary shrink-0">4.</span>
                  <div>
                    <span className="font-semibold text-foreground">Check environment variables</span> - Missing or incorrect env vars often cause build failures.
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="font-bold text-primary shrink-0">5.</span>
                  <div>
                    <span className="font-semibold text-foreground">Look for common culprits</span> - Dependency version mismatches, Node version incompatibility, or missing build tools.
                  </div>
                </li>
              </ol>
            </div>

            <div className="border-l-4 border-primary pl-4 bg-primary/5 py-4 rounded-r">
              <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                <Badge variant="outline">Customer-Facing Response</Badge>
              </h3>
              <div className="space-y-3 text-muted-foreground">
                <p>Hi there!</p>
                <p>
                  Thanks for reaching out. I can see your site is encountering a build error. The exit code 2 indicates something in your build process isn't completing successfully, 
                  but I need a bit more information to help pinpoint the exact cause.
                </p>
                <p>Could you help me with a few quick checks?</p>
                <ol className="list-decimal list-inside space-y-2 ml-4">
                  <li>Can you share the full build log? (You can find this in the Deploys tab → click on the failed deploy → View build logs)</li>
                  <li>Have you made any recent changes to your build configuration, package.json, or dependencies?</li>
                  <li>Does your site build successfully when you run the build command locally on your machine?</li>
                </ol>
                <p>
                  Once I see the complete log, I'll be able to identify exactly what's failing and guide you through the fix. 
                  These types of build issues are usually quick to resolve once we know what's causing them!
                </p>
                <p>Looking forward to getting your site back up and running.</p>
                <p>Best,<br />Support Team</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Troubleshooting;
