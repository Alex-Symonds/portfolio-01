## Status
Deprecated. Replaced by [attempt 02](https://github.com/Alex-Symonds/portfolio-02-magic).

## Project goal
Produce a static website to show off my projects to potential employers which:
- Has personality
- Avoids using CSS that's *too* interesting (that is... let's not go crazy like last time, let's make something that looks like a website)

## How to navigate this project
- About page's content is populated from a txt file: [code](https://github.com/Alex-Symonds/portfolio-01/blob/main/dist/static/scripts/about_me_text_replacer.js)
- Responsive nav hover on the home page. I took extra care with this: I wanted it to not just *fit* but to also play around with how it fitted around the decorative beam of light: [code](https://github.com/Alex-Symonds/portfolio-01/blob/e4f3d05b6acb61d65c6cceb34a01038827cd1e34/scss/home.scss#L382)
![](/README_src/Responsive_Nav_Bar.webp)
- Contact button hover (I just like it): [code](https://github.com/Alex-Symonds/portfolio-01/blob/e4f3d05b6acb61d65c6cceb34a01038827cd1e34/scss/home.scss#L270)
![](/README_src/Contact_Hover.webp)

    
## Why I made it this way
### Code
- Populated the About text from a separate file because I suspected it might take a lot of editing until I was happy with it and I hoped I could avoid making a million commits amending the About HTML page
- SVGs galore because I:
    - Wanted the hero image to be resizable so that when working on responsiveness, I could resize elements freely using CSS without worrying about definition
    - Underestimated how big SVG files can get
    - Made the light beam from an SVG because it was the first thing I tried and it worked: in retrospect, a linear-gradient in the CSS would've been better (it'd save downloading yet another SVG)
    - Wanted to put a thick white "stroke" border around my name, but struggled to find a good way to do this in CSS
        - I'd achieved a smaller-scale effect like this before by using shadows, but that technique went a bit wrong with a stroke wider than 1px
        - I tried creating an SVG of just the stroke - i.e. making a vaguely name-shaped white blob - and using it as a background image. This came close, but I was very picky about how the text should be positioned relative to the blob and I kept encountering issues with it being thrown off when the text or page resized and/or a different browser rendered it *just slightly differently*
        - Using an SVG for both the blobby border *and* my name almost worked
            - Good: I'd get the same look everywhere, the positioning would be locked in and I could resize the SVG in accordance with rem settings
            - Bad: nobody would be able to copy/paste the text
            - Neutral: I'd need to add avisually hidden alternative for screenreaders
        - Combined the previous two approaches: made the all-in-one background SVG; kept the text too and made it transparent 
            - Transparent text should cover screenreaders and copy/pasting
            - The positioning might be a bit off sometimes, but that's not a big deal when it's only seen during highlighting for copy/paste


### Design
Although I'd decided to drop the [sketchy doodles on lined paper](https://github.com/Alex-Symonds/portfolio-00) portfolio design, I had not given up on my "battling the forces of darkness" theme.

- Home page
    - Magical light beam draws attention to CTA button
    - Looks more website-y
    - Replaces acres of plain grey at the sides with acres of red-eyed shadow monsters (on desktop), which I consider a definite improvement
    - Includes magical arcane circle thingy with programming logos (hee!)
- About page
    - My plan for the Contact page in my previous attempt ended up being a bit light on content (to say the least), so I decided it'd make more sense to combine it with About
- Project page
    - More traditionally designed cards
    - Added the arcane circle to the projects page (on wider screens) because while my previous attempt was far too busy and loud, I'd over-corrected and this attempt was looking too spartan


## Reason for abandonment
The design. Again.

I'd convinced myself that a portfolio site design like this was "okay" and not "horribly unprofessional" because I'd seen some other portfolios which involved a cartoony hero image. One day I observed that the cartoony hero images I'd seen all had a similar style to them, lots of simple shapes put together and suddenly it dawned on me: theirs were made entirely of CSS! 

This realisation suddenly cast those portfolios in a new light. Those front end developers were showing off their CSS skills: what was I showing off with my SVGs?

I looked at my LinkedIn profile, imagined how it would look with red-eyed shadow monsters in the banner, had a huge crisis of confidence and decided to try again: this time aiming for something that still had *some* personality, but a bit more subdued and professional.



