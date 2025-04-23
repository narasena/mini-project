export default function DashboardPageTitle({
  pageTitle = 'Dashboard',
}: {
  pageTitle?: string;
}) {
  return (
    <h1 className="text-[22px] text-[#595959] font-semibold inline-block">
      {pageTitle}
    </h1>
  );
}