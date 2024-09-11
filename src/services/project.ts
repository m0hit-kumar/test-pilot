import { GetUserID } from "@/lib/utils";
import { user } from "@/store/selectors/user";
import { useSelector } from "react-redux";

const baseURL = "https://wfqjl6jv-7217.inc1.devtunnels.ms";

export const ProjectModuleService = () => {
  const getProjects = async () => {
    const userId = GetUserID();
    try {
      const response = await fetch(`${baseURL}/GetProjects/${userId}`);

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();

      console.log("Project associated with user:", data);
      return data;
    } catch (error) {
      console.error("Something wrong happend", error);
    }
  };

  const createProject = async (projectName: string) => {
    const userId = GetUserID();
    try {
      const response = await fetch(`${baseURL}/CreateProject/${userId}`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name: projectName }),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();

      console.log("Project Created Successfully:", data);
      return data;
    } catch (error) {
      console.error("Error Creating a Project:", error);
    }
  };
  return { getProjects, createProject };
};
