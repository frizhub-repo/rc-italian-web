import * as React from 'react'

const styles = ({
  container: {
    textAlign: "start",
    color: "red",
    marginTop: "-10px",
    marginBottom: "10px",
  }
});

export default function FieldError({ message }) {
  return (
    <div style={styles.container}>
      <small>{message}</small>
    </div>
  )
}
