import style from "@/components/error/error.module.css";

const Error = ({ error: error }: { error: string | null }) => (
  <p className={style.errorMessage}>{error}</p>
);
export { Error };
