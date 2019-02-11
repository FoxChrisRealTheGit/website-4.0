/* The Purpose of this file:
 *
 * Utility function to handle text input
 *
 */
/* Things to do:
 *
 * None
 *
 */
/* standard onHandleChange */
export default function onHandleChange(event, self) {
    event.stopPropagation();
    const value =
      event.target.type === "checkbox"
        ? event.target.checked
        : event.target.value;
    self.setState({
      [event.target.id]: value
    });
  } /* end standard onHandleChange */