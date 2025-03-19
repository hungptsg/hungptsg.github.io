import Giscus from '@giscus/react';
import './Page.css';

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
        <br></br>
        <p>Some parts of this site, such as its layout, is still a WIP.</p>
      </div>

      <Giscus
        id="comments"
        repo="hungptsg/mini-projects"
        repoId="R_kgDOOKxbMQ"
        category="General"
        categoryId="DIC_kwDOOKxbMc4CoNiH"
        mapping="pathname"

        term="Welcome to @giscus/react component!"
        reactionsEnabled="1"
        emitMetadata="0"
        inputPosition="top"
        theme="dark"
        lang="en"
        loading="lazy"
      />
    </main>
  );
}
