import dayjs from 'dayjs';
import Link from 'next/link';
import { FC, Fragment } from 'react';
// -------- custom component -------- //
import FigureImage from './FigureImage';
import NextLink from 'components/reuseable/links/NextLink';
import SocialLinks from 'components/reuseable/SocialLinks';
// -------- data -------- //
import data from 'data/blog-sidebar';

// ========================================================
type BlogSidebarProps = { thumbnail?: string };
// ========================================================

const BlogSidebar: FC<BlogSidebarProps> = ({ thumbnail }) => {
  return (
    <Fragment>
      <div className="widget">
        <h4 className="widget-title">Latest News</h4>
        {thumbnail && (
          <figure className="rounded mb-4">
            <img className="img-fluid" src={thumbnail} alt="" />
          </figure>
        )}
        <p>
        Shree Ma. Vi Secondary School is located in the peaceful surroundings of Digambarpur, Kshireshwornath, Dhanusha. Established with a vision to impart quality education. Shree Ma. Vi Secondary School strives to create an inclusive and stimulating learning environment. 
        </p>

        <SocialLinks className="nav social" />
      </div>

      {/* ========== popular posts section ========== */}
      <div className="widget">
        <h4 className="widget-title mb-3">Popular Posts</h4>

        <ul className="image-list">
          {data.popularPosts.map(({ id, title, image, comment, date }) => (
            <li key={id}>
              <NextLink title={<FigureImage width={100} height={100} className="rounded" src={image} />} href="#" />

              <div className="post-content">
                <h6 className="mb-2">
                  <NextLink className="link-dark" title={title} href="#" />
                </h6>

                <ul className="post-meta">
                  <li className="post-date">
                    <i className="uil uil-calendar-alt" />
                    <span>{dayjs(date).format('DD MMM YYYY')}</span>
                  </li>

                  <li className="post-comments">
                    <Link href="#" passHref legacyBehavior>
                      <a>
                        <i className="uil uil-comment" /> {comment}
                      </a>
                    </Link>
                  </li>
                </ul>
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* ========== categories section ========== */}
      <div className="widget">
        <h4 className="widget-title mb-3">Categories</h4>

        <ul className="unordered-list bullet-primary text-reset">
          {data.categories.map(({ id, title, post, url }) => (
            <li key={id}>
              <NextLink title={`${title} (${post})`} href={url} />
            </li>
          ))}
        </ul>
      </div>

      {/* ========== tags section ========== */}
      <div className="widget">
        <h4 className="widget-title mb-3">Tags</h4>

        <ul className="list-unstyled tag-list">
          {data.tags.map(({ id, title, url }) => (
            <li key={id}>
              <NextLink title={title} href={url} className="btn btn-soft-ash btn-sm rounded-pill" />
            </li>
          ))}
        </ul>
      </div>

      {/* ========== archieve section ========== */}
      <div className="widget">
        <h4 className="widget-title mb-3">Archive</h4>

        <ul className="unordered-list bullet-primary text-reset">
          {data.archieve.map(({ id, title, url }) => (
            <li key={id}>
              <NextLink title={title} href={url} />
            </li>
          ))}
        </ul>
      </div>
    </Fragment>
  );
};

export default BlogSidebar;
