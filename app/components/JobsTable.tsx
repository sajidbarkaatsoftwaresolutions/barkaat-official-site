export interface JobListing {
  id: string;
  role: string;
  department: string;
  location: string;
  level?: string;
}

interface JobsTableProps {
  jobs: JobListing[];
  title?: string;
}

export default function JobsTable({ jobs, title }: JobsTableProps) {
  return (
    <section className="py-12 md:py-20 px-5 md:px-10 bg-obsidian-900">
      <div className="max-w-[1400px] mx-auto">
        {title && <h2 className="font-montserrat text-2xl md:text-3xl lg:text-[48px] font-extrabold text-text-primary mb-10 uppercase tracking-[-0.5px]">{title}</h2>}

        <div className="overflow-x-auto border border-border-primary rounded-2xl bg-obsidian-800">
          <table className="w-full border-collapse text-xs md:text-sm">
            <thead className="bg-accent-crimson/5 border-b border-border-primary">
              <tr>
                <th className="p-3 md:p-5 text-left font-montserrat font-bold text-text-primary text-[10px] md:text-xs uppercase tracking-wider">Role</th>
                <th className="p-3 md:p-5 text-left font-montserrat font-bold text-text-primary text-[10px] md:text-xs uppercase tracking-wider">Department</th>
                <th className="p-3 md:p-5 text-left font-montserrat font-bold text-text-primary text-[10px] md:text-xs uppercase tracking-wider">Location</th>
                <th className="p-3 md:p-5 text-left font-montserrat font-bold text-text-primary text-[10px] md:text-xs uppercase tracking-wider">Level</th>
                <th className="p-3 md:p-5 text-left font-montserrat font-bold text-text-primary text-[10px] md:text-xs uppercase tracking-wider">Action</th>
              </tr>
            </thead>
            <tbody>
              {jobs.map((job) => (
                <tr key={job.id} className="border-b border-border-subtle transition-colors duration-200 hover:bg-accent-crimson/5">
                  <td className="p-3 md:p-5 font-semibold text-accent-crimson">{job.role}</td>
                  <td className="p-3 md:p-5 text-text-muted">{job.department}</td>
                  <td className="p-3 md:p-5 text-text-muted">{job.location}</td>
                  <td className="p-3 md:p-5 text-text-secondary">{job.level || "Not Specified"}</td>
                  <td className="p-3 md:p-5">
                    <button className="py-2 px-4 bg-accent-crimson text-text-primary border-none rounded-lg text-xs font-semibold cursor-pointer transition-all duration-200 font-montserrat hover:bg-accent-crimson-light hover:-translate-y-0.5">Apply Now</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
