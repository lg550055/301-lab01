import HornedBeast from './HornedBeast.js';
import beasts from './data.json';

export default function Main() {
  return (
    <main>
      {beasts.map(function(e, i) {
        return <HornedBeast title={e.title} image_url={e.image_url} description={e.description} keyword={e.keyword} key={i}/>
      })}
    </main>
  );
}
