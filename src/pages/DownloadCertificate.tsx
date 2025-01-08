import { useSearchParams } from "react-router-dom";

const DownloadCertificate = () => {
  const [searchParams] = useSearchParams();
  const userAnswers = searchParams.get("answers")?.split(",").map(Number) || [];
  return (
    <div>
      <h1>
        This is DownloadCertificate component
        {userAnswers}
      </h1>
    </div>
  );
};

export default DownloadCertificate;
