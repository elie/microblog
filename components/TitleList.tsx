import Link from "next/link";
import { getPosts } from '@/queries/posts';

/** Show list of blog titles */

async function TitleList() {

  const titles = await getPosts();

  if (titles.length === 0) {
    return <b>Please add a post!</b>;
  }

  return (
    <div className="row">
      {titles.map(title => (
        <div key={title.id} className="col-md-4 mb-3">
          <div className="card h-100">
            <div className="card-body">
              <h5 className="card-title">
                <Link href={"/" + title.id}>{title.title}</Link>
              </h5>
              <p className="card-text">{title.description}</p>
            </div>
            <div className="card-footer">
              <small className="text-muted">{title.votes} votes</small>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default TitleList;