# modal-library-react-hb

## Installation
Run the following command:
`npm install modal-library-react-hb/dist/Modal`

## Import
```javascript
import Modal from 'modal-library-react-hb/dist/Modal'

<Modal />
```

## How to use

### Opening
```javascript
import Modal from 'modal-library-react-hb/dist/Modal'

const MyComponent = () => {
	return(
		<>
			<Modal isModal={true} />
		</>
	)
}
```
### Closing
To close the modal you need to pass the parameter "isModal" to "false" or press to the cross "button close"

```javascript
			<Modal isModal={true} />
```
### Add content

```javascript
import Modal from 'modal-library-react-hb/dist/Modal'

const MyComponent = () => {
	return(
		<>
			<Modal
			 	h1="Title"
				text="Lorem opsum"
			 />
		</>
	)
}

```

### Customize

You can customize the background ( which is opaque by default), the modal, the title, the text

```javascript
import Modal from 'modal-library-react-hb'

const MyComponent = () => {
	return(
		<>
			<Modal
			 	bgModal={{backgroundColor: "red"}} // style of the opaque background by default
				styleContainer={{border: "1px solid black"}} // style of the box
				styleH1={{color: "blue", fontSize: "14px" }} // style of tilte
				styleText={{FontWeight: "20px"}} // style of text
				styleButton={{borderRadus: "5px"}} // style of button
			 />
		</>
	)
}

```



