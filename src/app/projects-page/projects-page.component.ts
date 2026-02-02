import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects-page',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, CommonModule],
  templateUrl: './projects-page.component.html',
  styleUrl: './projects-page.component.scss'
})
export class ProjectsPageComponent {
  projects = [
    {
      title: 'Spotlight search for linux',
      description: 'I created a version of spotlight search for linux using python and ' +
        'gtk 4. It allows users to quickly search for files and applications on their linux system',
      image: 'spotlight-search.png',
      link: 'https://github.com/dsl3zm/finder-linux/'
    },
    {
      title: 'Portfolio website',
      description: 'Created a small portfolio website using angular 21',
      image: 'portfolio-website.png',
      link: 'https://github.com/dsl3zm/daniel-portfolio'
    },
    {
      title: 'Recipe Scraper',
      description: 'Created a quick python script using both gemini and an off-the-shelf recipe scraper ' +
      'to scrape recipes in json format and upload them to google drive',
      image: 'recipe-scraper.png',
      link: 'https://github.com/dsl3zm/recipe-scraper'
    }
  ];
}
