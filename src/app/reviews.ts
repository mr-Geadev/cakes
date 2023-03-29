export type ReviewIndex = '1' | '2' | '3' | '4';

export interface Review {
  index: ReviewIndex;
  displayName: string;
  text: string;
}

export const ReviewList: Review[] = [
  { index: '1', displayName: 'Мария В.', text: 'Следует отметить, что дальнейшее развитие различных форм деятельности позволяет'},
  { index: '2', displayName: 'Екатерина С.', text: 'Следует отметить, что дальнейшее развитие различных форм деятельности позволяет'},
  { index: '3', displayName: 'Дмитрий В.', text: 'Следует отметить, что дальнейшее развитие различных форм деятельности позволяет'},
  { index: '4', displayName: 'Иванов И.', text: 'Следует отметить, что дальнейшее развитие различных форм деятельности позволяет'},
]
