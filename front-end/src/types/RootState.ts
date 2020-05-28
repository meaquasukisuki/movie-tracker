import { CardContainerState } from 'app/containers/CardContainer/types';
import { HeaderState } from 'app/containers/Header/types';
import { LoadingComponentState } from 'app/containers/LoadingComponent/types';
import { FormState } from 'app/containers/Form/types';
import { SignUpFormState } from 'app/containers/SignUpForm/types';
// [IMPORT NEW CONTAINERSTATE ABOVE] < Needed for generating containers seamlessly

/* 
  Because the redux-injectors injects your reducers asynchronously somewhere in your code
  You have to declare them here manually
*/
export interface RootState {
  cardContainer?: CardContainerState;
  header?: HeaderState;
  loadingComponent?: LoadingComponentState;
  form?: FormState;
  signUpForm?: SignUpFormState;
  // [INSERT NEW REDUCER KEY ABOVE] < Needed for generating containers seamlessly
}
