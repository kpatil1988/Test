import Link from "next/link";
import { APP_NAME_URL } from "@/constants/site_hero";
import { APP_NAME } from "@/constants/main_constants";

const AppNameHeader = () => {
  return (
    <>
      <Link href={APP_NAME_URL}>
          <div className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-custom-bg-primary to-custom-bg-secondary">
            {APP_NAME}
          </div>
      </Link>
    </>
  );
};

export default AppNameHeader;
