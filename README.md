experiences
===========

An open source visual theme for Jekyll, that I use to document my travels. You can see a demo of it [here](http://michaeljdeeb.com/experiences/).

Pull requests are welcome.

## Setup
1. Get [Jekyll](https://help.github.com/articles/using-jekyll-with-pages/)
2. `git clone https://github.com/michaeljdeeb/experiences.git`
3. Configure [_config.yml](config.yml) to your liking.
4. Open a terminal window and `cd` to the cloned repository.
5. `jekyll serve --watch`
6. Open [http://localhost:4000](http://localhost:4000) in your browser.

### Layout Specific Front-Matter
`layout` - Required by Jekyll, tells Jekyll what template to use for the post.

`title` - Required by Jekyll, your post needs a title.

`date` - Required by Jekyll, placed in a `<date>` tag hidden from view on each post.

`description` - Not *really* required, but descriptions help search engines help you. There is no default description for pages without one.

`active` - This tells Jekyll which item in the navigation to highlight. All files in `_posts` should have "experiences".

`image` - This will be the cover image for the post. All you need is the file name with extension here, provided the month/year of the post and your uploads match.

`blurb` - This will be shown on the cover image of the post as well as the thumbnail for the post on the page that lists all of the posts. This uses Font Awesome and should be structured like an array `["icon-name-without-fa", "Complimenting text"]`

`callouts` - This is an extended version of the blurb where you can call out fun things related to your post. They will show up in an aside at the end of your post as a TL;DR. This also uses Font Awesome, but as a hash. `- icon-name: "Complimenting text"`


### Photo Grouping Classes
`side-by-side-same-aspect` - Two images contained by a parent element with this class will be displayed next to each other in a post. Use this class if they are the same orientation. These images will overflow the text margins on mobile.

`side-by-side-mixed-aspect` - Two images contained by a parent element with this class will be displayed next to each other in a post. Use this class if they are the different orientation. These images will overflow the text margins on mobile.

NOTE: This class only works with 4:3 images.

`overflow` - Photos with this class will overflow the text margins on mobile.

`single-centered` - Photos with this class will be centered horizontally. Photos with this class will also never be larger than 100vh minus the height of the navigation bar.


### main.scss Variables
`$brand-dark` - The left half of the nav gradient. Also used as the default color for links.

`$brand-light` - The right half of the nav gradient. Also used as the hover and visited colors for links.
