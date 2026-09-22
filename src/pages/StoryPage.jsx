import { useParams, Navigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { getStory, getOtherStories } from '../data/stories';
import StoryArticle from '../components/StoryArticle';

export default function StoryPage() {
  const { slug } = useParams();
  const story = getStory(slug);

  if (!story) return <Navigate to="/inspiring-stories" replace />;

  return (
    <>
      <Helmet>
        <title>{story.name} | Inspiring Stories | Kenya Thriving</title>
        <meta name="description" content={story.standfirst} />
      </Helmet>
      <StoryArticle story={story} others={getOtherStories(slug)} />
    </>
  );
}