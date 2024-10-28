

interface IProps {
  stepsCount: number;
  onStepChange: () => void
}

// @ts-ignore
const useBackHandler = ({stepsCount, setStepsAction, onStepChange }: IProps) => {

  // useFocusEffect(
  //   useCallback(() => {
  //     const onBackPress = () => {
  //       if (stepsCount > 1) {
  //         onStepChange()
  //         return true;
  //       } else {
  //         return false;
  //       }
  //     };

  //     BackHandler.addEventListener('hardwareBackPress', onBackPress);

  //     return () => {
  //       BackHandler.removeEventListener('hardwareBackPress', onBackPress);
  //     };
  //   }, [stepsCount, onStepChange])
  // );
};

export default useBackHandler;