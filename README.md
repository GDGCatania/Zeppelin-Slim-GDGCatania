# Project Zeppelin Slim / GDG Catania

### About Slim Version
The Slim Version of Project Zeppelin is a SINGLE page edited for GDGCatania. The website contains all information that we need in a small version.

###Feature
+ Added a box for show the last events. This feature use [Angular](https://github.com/angular/angular) and [GDGx Hub Api](https://github.com/gdg-x/hub) customizable by *js/custom/app.js*.
+ Added social box (follow us) customizable by *_config.yml*.
+ Added social icon on the Speaker's footer customizable by *data/_speakers.yml*.
+ Added [particles.js](https://github.com/VincentGarreau/particles.js/) over the hero page.

An idea of [pietrobiondi](https://github.com/pietrobiondi)  and [Tkd-Alex](https://github.com/Tkd-Alex)  for [GDGCatania](https://github.com/GDGCatania)  .

#### Live demo ~~http://www.gdgcatania.org/~~

------

### About Full Version [[Link]](https://github.com/gdg-x/zeppelin) 
Project Zeppelin allows you to setup awesome GDG DevFest site in 5 minutes.

Project is built on top of [Jekyll](http://jekyllrb.com/) - simple, blog-aware, static site generator. Jekyll also happens to be the engine behind GitHub Pages, which means you can use Jekyll to host your website from GitHub’s servers for free. [Learn more about Jekyll](http://jekyllrb.com/).

Template is brought by [GDG Lviv](http://lviv.gdg.org.ua/) team.

#### Live demo http://gdg-x.github.io/zeppelin/

## Local development

Check if you have [all requirements for local environment](http://jekyllrb.com/docs/installation/).
To install all development dependencies install [Bundler](http://bundler.io/).
```bash
    sudo apt install ruby-dev
    gem install bundler
```
and run next command from root folder:

```bash
  sudo gem install json -v '1.8.6'
  bundle install
```  

To start Jekyll run:
```bash
    jekyll serve -w
```
Site will be available at http://127.0.0.1:4000/zeppelin/ or http://localhost:4000/zeppelin/ (on Windows)

**NOTE:** in this mode all changes to html and data files will be automatically regenerated, but after changing ```_config.yml``` you have to restart server.

### Used libraries
* [Bootstrap](https://github.com/twbs/bootstrap)
* [Animate.css](https://github.com/daneden/animate.css)
* [Waves](https://github.com/publicis-indonesia/Waves)
* [jquery.appear](https://github.com/bas2k/jquery.appear)
* [jQuery countTo Plugin](https://github.com/mhuggins/jquery-countTo)
* [Typed.js](https://github.com/mattboldt/typed.js)
* [Sticky-kit](https://github.com/leafo/sticky-kit)


### Contributors
* Design and web development: [Oleh Zasadnyy](https://github.com/ozasadnyy)
* Idea: [Vitaliy Zasadnyy](https://github.com/zasadnyy)

See [list of contributors](https://github.com/gdg-x/zepplin/graphs/contributors)

Maintainers: [@tasomaniac](https://github.com/tasomaniac) and [@ozasadnyy](https://github.com/ozasadnyy).

### License
Project is published under the [MIT license](https://github.com/gdg-x/zeppelin/blob/master/LICENSE.txt). Feel free to clone and modify repo as you want, but don't forget to add reference to authors :)
