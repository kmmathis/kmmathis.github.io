---
layout: post
title:  "Summit Homes"
description: "WordPress website design and development"
date:   2016-01-23 13:12:51 -0400
categories: web
techs: "WordPress, PHP, Less, responsive design, JavaScript, jQuery, Git, SVG, Google Translate, Google Maps API"
nextProjectName: "Veterans National Lending Group"
nextProjectURL: "vnlg"
siteurl: "https://summithomeswa.com"
---
<div class="container-thin mx-auto p2">
<h2>Building a website for home builders</h2>
{% include browser.html poster="/assets/img/summit-desktop.jpg" webm="/assets/video/summit-desktop.webm" mp4="/assets/video/summit-desktop.mp4" classes="mb2" %}
<p>Summit Homes needed a website for showcasing their many communities in order to attract and inform people looking for new homes. They had put off redesigning their old website for quite some time, but so as to not fall behind the competition, they contracted me to create a fresh look for their digital presence. Knowing that they would need to edit content on their website on a regular basis, I decided to build them a responsive WordPress theme that presented their communities and the homes within them as cleanly as possible.</p>
<p>Clicking through to a community page shows you information about the community, as well as available homes and floor plans that the buyer can choose from. All of this is editable from the dashboard of the website, which allows Summit Homes to update their website whenever they need.</p>

</div>

<div class="container mx-auto p2 clearfix">
  <div class="col col-12 sm-col-4">
    {% include browser.html poster="/assets/img/summit-mobile.jpg" webm="/assets/video/summit-mobile.webm" mp4="/assets/video/summit-mobile.mp4" %}
  </div>
  <div class="col col-12 sm-col-8 sm-p4">
    <h2>Two domains, one code base</h2>
    <p>Summit Homes builds communities in both Washington and Nevada, and they wanted to have a website for each community to better split traffic and leads. Conveniently, I was able to use the same theme and git repository for both WordPress installs which made theme edits a lot easier to handle.</p>

    <h2>Other Stuff</h2>
    <p>Some of the other features of the site include a blog, contact forms for general inquiries and maintenance requests, and a toolbar for translating the website for potential home buyers who speak Spanish.</p>
    <p>Summit Homes has said that since the launch of their new website, their phone has constantly been off the hook!</p>
  </div>
</div>

<div class="container-thin mx-auto p2">
  <h2>Interactive maps</h2>

  {% include browser.html poster="/assets/img/summit-map.jpg" webm="/assets/video/summit-map.webm" mp4="/assets/video/summit-map.mp4" classes="mb2" %}

  <p>The biggest feature on the Summit Homes website is the interactive plat maps for each of the communities. Summit Homes wanted to display their communities as a stylish map with each of the plots reflecting their current status: available, sold, pending and so on. To get the job done, I created SVG files for each of the communities, with layers for each of the plots on the map. Using some JavaScript and CSS I was able to style the plots depending on the status that was set in the database.</p>
  <p>I also made it possible to show the map on its own page, which is useful to Summit Homes as they have a large screen at the office of each community where they show the map to prospective buyers. The map is fully responsive and adapts to the space that it has available. Summit Homes loves it!</p>
</div>