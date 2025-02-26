export function PageHome() {
  return (
    <main id='PAGE_HOME' className='p-8 flex-1 overflow-y-auto h-[calc(100vh-48px)]'>
      <div className="max-w-3xl">
        <p className="[&:not(:first-child)]::mt-4 leading-relaxed   text-color-text">This is a site that give tutorial/example
          for making <a href="https://godotengine.org/"
            className="text-color-hyperlink  hover:text-color-primary-hover  hover:underline  transition-none">Godot</a> games.
        </p>
        <p className="[&:not(:first-child)]::mt-4 leading-relaxed   text-color-text">This site is heavily influenced by <a
          href="https://kidscancode.org/godot_recipes/4.x/"
          className="text-color-hyperlink  hover:text-color-primary-hover  hover:underline  transition-none">kidscancode.org</a>.
        </p>
      </div>
    </main>
  );
}
