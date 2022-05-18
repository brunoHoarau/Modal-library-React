import Modal from "./Modal.js";
 
export default {
    title: "Button",
    component: Modal,
    args: {
        isModal: true,
        text: "lorem ipsum para belum"
    }
};
 
const Template = args => <Modal {...args} />;
  
const Standard = Template.bind({});
const Disabled = Template.bind({})
Disabled.args = {isModal: false};
const BgRed = Template.bind({})
BgRed.args = {isModal: true, text: "opsum lorem belum si vis", bgModal: {backgroundColor: "red"}};
 
export {Standard, Disabled, BgRed};