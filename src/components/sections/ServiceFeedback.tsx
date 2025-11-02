import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const ServiceFeedback = () => {
  return (
    <section id="feedback" className="section-padding bg-muted/30">
      <div className="container max-w-4xl">
        <h2 className="mb-8">Service Feedback</h2>
        <Card>
          <CardHeader>
            <CardTitle>My Experience with Netlify</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                <Badge variant="default">Positive Impressions</Badge>
              </h3>
              <ul className="space-y-3 text-muted-foreground ml-4">
                <li className="flex gap-2">
                  <span className="text-primary">•</span>
                  <span><span className="font-semibold text-foreground">Deploy previews</span> are exceptional – seeing changes instantly in a live preview before merging is incredibly valuable for collaboration and catching issues early.</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary">•</span>
                  <span>The <span className="font-semibold text-foreground">Git integration</span> is seamless. Push to GitHub and the site updates automatically – it just works.</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary">•</span>
                  <span><span className="font-semibold text-foreground">Build logs</span> are detailed and helpful for debugging, with clear error messages that actually help you solve problems.</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                <Badge variant="secondary">Constructive Suggestions</Badge>
              </h3>
              <ul className="space-y-3 text-muted-foreground ml-4">
                <li className="flex gap-2">
                  <span className="text-accent">•</span>
                  <span>The <span className="font-semibold text-foreground">environment variable management</span> could be more intuitive. Having to navigate through multiple menus to add or edit env vars feels clunky. A dedicated "Environment" tab at the top level would improve the UX significantly.</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-accent">•</span>
                  <span><span className="font-semibold text-foreground">Build minutes quota visibility</span> could be more prominent. I'd love to see a dashboard widget showing current usage and limits at a glance, rather than having to dig into billing settings.</span>
                </li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default ServiceFeedback;
