export type InputPanelProps = InputPanelExternalProps & DispatchProps

interface InputPanelExternalProps { };

export type DispatchProps = {
  addTodo: (text: string) => void;
};
