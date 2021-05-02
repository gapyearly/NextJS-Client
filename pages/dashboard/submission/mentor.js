import { useForm } from "react-hooks-helper";
import Button from "@components/Buttons/Button";
import styles from "@styles/Dashboard/UserDashboard.module.css";
import { useAuth } from "@contexts/auth";
import DashboardLayout from "@components/Layouts/DashboardLayout";
import strapi from "@api/strapi";
import { useAlert } from "react-alert";
import { useRouter } from "next/router";
import Editor from "@components/RichtextEditor/Ckeditor";

const defaultData = {
  summary: "",
  struggles: "",
};

export default function MentorSubmit() {
  const [formData, setForm] = useForm(defaultData);
  const { user } = useAuth();
  const alert = useAlert();
  const router = useRouter();
  const onSubmit = async () => {
    try {
      await strapi.put(`users/${user.id}`, {
        mentorInfo: formData,
      });
      alert.success(
        "Mentor info succesfully submited. A confirmation email will be sent."
      );
      router.push("/dashboard/submission");
    } catch {
      alert.error("Could not submit. Please refresh or contact admin.");
    }
  };

  return (
    <DashboardLayout>
      <h1 className={styles.title}>Mentor Submission</h1>
      <form
        className={styles.mentorSubmit}
        onSubmit={onSubmit}
        action="javascript:void(0);"
      >
        <label htmlFor="activities">
          What did you do over your gap year, by the month?*
        </label>
        <textarea
          name="summary"
          id="activities"
          placeholder="e.g. 
          
          July-August:
   September:
       November-January:
        February:
        March:
        April-July:"
          onChange={setForm}
          value={formData.summary}
          required
        />

        <label htmlForm="struggles">What were your struggles?*</label>
        <textarea
          name="struggles"
          id="struggles"
          required
          onChange={setForm}
          value={formData.struggles}
        />
        <Button color="greenBg">Submit</Button>
        {/* alert, submit action */}
      </form>
    </DashboardLayout>
  );
}
