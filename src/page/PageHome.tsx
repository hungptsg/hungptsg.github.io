import { TabCode } from '../com/TabCode';
import './PageContent.css';

export function PageHome() {
  return (
    <main id='PAGE_HOME' className='content'>
      <div className='max-w-3xl'>
        <p>This is a site that give tutorial/example
          for making games in <a href='https://godotengine.org/'>Godot 4.x</a>.
        </p>
        <p>This site is somewhat influenced by <a
          href='https://kidscancode.org/godot_recipes/4.x/'>kidscancode.org</a>.
        </p>
      </div>
    </main>
  );
}
