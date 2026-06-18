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
    <section className="jobs-section">
      <div className="jobs-container">
        {title && <h2 className="jobs-title">{title}</h2>}

        <div className="jobs-table-wrapper">
          <table className="jobs-table">
            <thead>
              <tr>
                <th>Role</th>
                <th>Department</th>
                <th>Location</th>
                <th>Level</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {jobs.map((job) => (
                <tr key={job.id}>
                  <td className="job-role">{job.role}</td>
                  <td className="job-department">{job.department}</td>
                  <td className="job-location">{job.location}</td>
                  <td>{job.level || "Not Specified"}</td>
                  <td>
                    <button className="job-cta">Apply Now</button>
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
