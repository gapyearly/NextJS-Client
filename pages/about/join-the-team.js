import Layout from "@components/Layouts/Layout";
import Button from "@components/Buttons/Button";
import btnstyles from "@components/Buttons/Button.module.css";
import styles from "@components/Forms/form.module.css";
import PageTitle from "@components/PageTitle";

export default function JoinTeam() {
  return (
    <>
      <PageTitle>Join the Team</PageTitle>
      <Layout>
        <h2>JOIN US in changing how the world takes a gap year.</h2>
        <p className={styles.contactDescription}>
          Passionate about gap years? Want to use your skills in a real-world
          situation and gain work experience with an international team during
          COVID-19? Have ideas, motivation, and enthusiasm? Consider applying to
          join our growing team!
        </p>
        <p className={styles.contactDescription}>
          We have available positions in a variety of fields and commitments.
          We’d love to hear from you!
        </p>
        <br></br>
        <h3>Technology</h3>
        <p>
          This is a project-based position that will allow you put your
          technological skills to use and see visible results by implementing
          changes and new features on our website.
        </p>
        <h3>Finance</h3>
        <p>
          Work with the team to create financial plans, document operating costs
          and other expenses.
        </p>
        <h3>Marketing & Outreach</h3>
        <p>
          Facilitate connections and collaborations with other organizations and
          companies as we grow our community.
        </p>
        <h3>Content – Team Member or Team Lead</h3>
        <p>
          Work with our Content Team to create projects and useful content on
          our Instagram, website, social media and more.
        </p>
        <h3>Operations</h3>
        <p>
          Help with day-to-day operations within the Gapyearly website, social
          media, outreach, community, and more.
        </p>
        <br></br>
        <br></br>
        <p className={styles.contactDescription}>
          If you’re interested in joining the team, please fill out this form
          and we’ll get back to you soon!
        </p>

        {/* TODO: alex fill in action pls */}
        <form method="POST" action="#" className={styles.joinTeam}>
          <label htmlFor="fullName">
            Full name
            <input
              id="joinTeamFullName"
              type="text"
              name="fullName"
              required
            ></input>
          </label>

          <label htmlFor="email">
            Email
            <input
              id="joinTeamEmail"
              type="email"
              name="email"
              placeholder="example@email.com"
              required
            ></input>
          </label>
          <label htmlFor="currentLocation">
            Current Location
            <p>On a gap year? In university? Other?</p>
            <input
              id="joinTeamCurrentLocation"
              type="text"
              name="currentLocation"
              placeholder="
              "
              required
            ></input>
          </label>
          {/* may want a dropdown here, positions change...brr */}
          <label htmlFor="position">
            Position
            <input
              id="joinTeamPosition"
              type="text"
              name="position"
              placeholder="e.g. Content - Team Lead"
              required
            ></input>
          </label>

          <label htmlFor="statementOfInterest">
            Statement of Interest
            <p>
              Please write a paragraph or so on why you would like to join our
              team. Include any relevant skills or experience and how you spent,
              or are spending, your gap year (if applicable).
            </p>
            <textarea
              id="joinTeamStatementOfInterest"
              type="textarea"
              name="statementOfInterest"
              required
            ></textarea>
          </label>
          <Button color="greenBg" href="#">
            Submit
          </Button>
        </form>
      </Layout>
    </>
  );
}
