import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CatalogPage } from 'src/app/pages/catalog/catalog.page';

const routes: Routes = [
  {
    path: 'desserts',
    component: CatalogPage,
    data: {
      typeHeader: 'header',
      headerContent: {
        title: 'Десерты',
        text: 'Следует отметить, что дальнейшее развитие различных форм деятельности позволяет выполнить важные',
        illustrationFileName: 'desserts',
        illustrationMargin: 72,
        backgroundColor: '#94C5BD'
      },
    },
  },
  {
    path: 'classic',
    component: CatalogPage,
    data: {
      typeHeader: 'header',
      headerContent: {
        title: 'Классические торты',
        text: 'Следует отметить, что дальнейшее развитие различных форм деятельности позволяет выполнить важные',
        illustrationFileName: 'classic',
        illustrationMargin: -75,
        backgroundColor: '#94C5BD'
      },
    },
  },
  {
    path: 'bakery',
    component: CatalogPage,
    data: {
      typeHeader: 'header',
      headerContent: {
        title: 'Выпечка',
        text: 'Следует отметить, что дальнейшее развитие различных форм деятельности позволяет выполнить важные',
        illustrationFileName: 'bakery',
        illustrationMargin: -82,
        backgroundColor: '#FFD8BE'
      },
    },
  },
  {
    path: 'bread',
    component: CatalogPage,
    data: {
      typeHeader: 'article',
      articleContent: {
        title: 'Хлеб',
        subtitle: 'Как принято считать, действия представителей оппозиции описаны максимально подробно.',
        text: 'Не следует, однако, забывать, что синтетическое тестирование играет определяющее значение для направлений прогрессивного развития! ',
      illustrationFileName: "bread"
      },
    },
  },
  {
    path: 'diet',
    component: CatalogPage,
    data: {
      typeHeader: 'article',
        articleContent: {
        title: 'Диетическая продукция',
        subtitle: 'Как принято считать, действия представителей оппозиции описаны максимально подробно.',
        text: 'Не следует, однако, забывать, что синтетическое тестирование играет определяющее значение для направлений прогрессивного развития!',
        illustrationFileName: "diet"
      },
    },
  },
  {
    path: '**',
    redirectTo: 'desserts',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CatalogRoutingPageModels { }
