import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Activities = () => {
  const favorites = [
    { name: "Debug a customer's build using a programming language and framework that you've never seen before", reason: "I love the challenge of learning new technologies under pressure and the satisfaction of solving complex problems." },
    { name: "Write and maintain documentation for our software and blog posts", reason: "Clear documentation is crucial for user success. I enjoy breaking down complex concepts into accessible explanations." },
    { name: "Help train and onboard new support teammates", reason: "Knowledge sharing is incredibly rewarding, and I believe strong teams are built through mentorship." },
    { name: "Respond to 25+ support requests via email every day", reason: "Direct customer interaction keeps me connected to real user needs and helps me understand pain points firsthand." },
    { name: "Work with people to figure out if Netlify is suitable for their use case", reason: "Consultative conversations where I can genuinely help people make the right technical decisions are fulfilling." }
  ];

  const leastFavorites = [
    { name: "Manage a support team", reason: "While I respect management, I'm more energized by hands-on technical work and direct problem-solving." },
    { name: "Respond to queries on Twitter, Reddit, Hacker News and other 3rd party sites", reason: "Public forums can be valuable but often lack context, making it harder to provide truly helpful solutions." },
    { name: "Work with the sales team to help train users on the product", reason: "Sales-focused training feels less authentic than support-driven education based on real user challenges." },
    { name: "Engage multiple users at once in a chat room", reason: "Multitasking across conversations can lead to shallow interactions. I prefer focused, deep problem-solving." },
    { name: "Submit bug reports and potentially bug fixes to closed and open source projects", reason: "While important, this is more reactive. I prefer proactive improvements and direct customer assistance." }
  ];

  return (
    <section id="activities" className="section-padding">
      <div className="container max-w-4xl">
        <h2 className="mb-8">Activity Ranking</h2>
        <div className="grid gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-primary">Top 5 Favorite Activities</CardTitle>
            </CardHeader>
            <CardContent>
              <ol className="space-y-4">
                {favorites.map((activity, index) => (
                  <li key={index} className="flex gap-4">
                    <span className="font-bold text-primary text-xl shrink-0">{index + 1}.</span>
                    <div>
                      <p className="font-semibold text-foreground mb-1">{activity.name}</p>
                      <p className="text-sm text-muted-foreground">{activity.reason}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-muted-foreground">5 Least Favorite Activities</CardTitle>
            </CardHeader>
            <CardContent>
              <ol className="space-y-4">
                {leastFavorites.map((activity, index) => (
                  <li key={index} className="flex gap-4">
                    <span className="font-bold text-muted-foreground text-xl shrink-0">{index + 1}.</span>
                    <div>
                      <p className="font-semibold text-foreground mb-1">{activity.name}</p>
                      <p className="text-sm text-muted-foreground">{activity.reason}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Activities;
