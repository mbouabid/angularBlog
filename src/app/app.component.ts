import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'routing';
  posts = [
    {
      title: 'titre du premier post',
      content: 'contenu du post n°1 contenu du post n°1 contenu du post n°1 contenu du post n°1 ',
      loveIts: 1,
      created_at: new Date()
    },
    {
      title: 'titre du deuxième post',
      content: 'contenu du post n°2 contenu du post n°2 contenu du post n°2 contenu du post n°2 ',
      loveIts: 2,
      created_at: new Date()
    },
    {
      title: 'titre du troisième post',
      content: 'contenu du post n°3 contenu du post n°3 contenu du post n°3 contenu du post n°3 ',
      loveIts: 3,
      created_at: new Date()
    }
  ];
}
