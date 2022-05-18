import './Modal.css'

const Modal = ({h1,text,bgModal,styleModal,styleH1,styleText,styleButton,isModal}) => {
	const styles = {
		bgModal: bgModal,
		styleContainer: styleModal,  
		styleH1: styleH1, 
		styleText: styleText, 
		styleButton: styleButton
	}

	return(
		<div id='modal' style={styles.bgModal} hidden={!isModal} >
			<div id="modal-content" style={styles.styleContainer} >
				{ h1 ? <h1 style={styles.styleH1}>{h1}</h1> : ""}
				{ text ? <p style={styles.styleText}>{text}</p> : ""}
				<button 
					id="close" 
					style={styles.styleButton}
					>X</button>
			</div>
		</div>
	)
}

export default Modal; 