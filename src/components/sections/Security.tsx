import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, AlertTriangle, MessageSquare, Users } from "lucide-react";

const Security = () => {
  return (
    <section id="security" className="section-padding">
      <div className="container max-w-4xl">
        <h2 className="mb-8">Security Incident Response</h2>
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Shield className="h-5 w-5 text-primary" />
              Handling a Severe Security Report
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <p className="text-muted-foreground">
              If I received a report of a severe security issue on www.netlify.com, here's my high-level response plan:
            </p>

            <div className="grid gap-4">
              <div className="flex gap-4 p-4 bg-destructive/10 rounded-lg border border-destructive/20">
                <AlertTriangle className="h-6 w-6 text-destructive shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-foreground mb-2">1. Immediate Acknowledgment & Triage</h3>
                  <ul className="space-y-2 text-muted-foreground text-sm">
                    <li>• Acknowledge receipt to the reporter within 1 hour, thanking them and confirming we're investigating</li>
                    <li>• Gather initial details: affected URL, reproduction steps, potential impact, whether it's been disclosed publicly</li>
                    <li>• Assess severity: Is data exposed? Can it be exploited at scale? Is it actively being exploited?</li>
                  </ul>
                </div>
              </div>

              <div className="flex gap-4 p-4 bg-primary/10 rounded-lg border border-primary/20">
                <Users className="h-6 w-6 text-primary shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-foreground mb-2">2. Internal Escalation</h3>
                  <ul className="space-y-2 text-muted-foreground text-sm">
                    <li>• Immediately escalate to the security team and engineering leadership</li>
                    <li>• Create a dedicated secure channel (e.g., private Slack channel) for coordination</li>
                    <li>• Loop in relevant teams: engineering, DevOps, legal, and PR if necessary</li>
                    <li>• Document everything: timeline, actions taken, who's involved</li>
                  </ul>
                </div>
              </div>

              <div className="flex gap-4 p-4 bg-accent/10 rounded-lg border border-accent/20">
                <Shield className="h-6 w-6 text-accent shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-foreground mb-2">3. Investigation & Mitigation</h3>
                  <ul className="space-y-2 text-muted-foreground text-sm">
                    <li>• Reproduce the issue in a safe environment to confirm the vulnerability</li>
                    <li>• Determine scope: How many users are affected? What data is at risk?</li>
                    <li>• Implement immediate mitigation if possible (disable the feature, deploy a hotfix, add rate limiting, etc.)</li>
                    <li>• Monitor for active exploitation using logs and security tools</li>
                  </ul>
                </div>
              </div>

              <div className="flex gap-4 p-4 bg-secondary/50 rounded-lg border border-border">
                <MessageSquare className="h-6 w-6 text-foreground shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-foreground mb-2">4. Communication & Resolution</h3>
                  <ul className="space-y-2 text-muted-foreground text-sm">
                    <li>• Keep the reporter updated on progress (aim for updates every 24-48 hours)</li>
                    <li>• Once resolved, work with security team to prepare a disclosure timeline</li>
                    <li>• If appropriate, offer acknowledgment in security advisories or bug bounty rewards</li>
                    <li>• Conduct a post-mortem to understand root cause and prevent recurrence</li>
                    <li>• If users were impacted, prepare transparent public communication</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="p-4 bg-muted/50 rounded-lg mt-6">
              <h4 className="font-semibold text-foreground mb-2">Key Principles</h4>
              <ul className="space-y-2 text-muted-foreground text-sm">
                <li>• <strong className="text-foreground">Speed matters:</strong> Respond fast, but don't sacrifice accuracy</li>
                <li>• <strong className="text-foreground">Transparency with the reporter:</strong> Keep them informed and treat them as a partner</li>
                <li>• <strong className="text-foreground">User safety first:</strong> Prioritize protecting users over PR concerns</li>
                <li>• <strong className="text-foreground">Document everything:</strong> Clear records help with legal, compliance, and learning</li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Security;
