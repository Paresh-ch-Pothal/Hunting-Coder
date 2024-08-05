import React, { useState } from 'react'
import styles from '../styles/contact.module.css'

export default function contact() {

  const [name, setname] = useState('');
  const [email, setemail] = useState('');
  const [phone, setphone] = useState('');
  const [desc, setdesc] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(phone,name,email,desc);

    let response = await fetch("http://localhost:3000/api/postContact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name: name, phone: phone, desc: desc, email: email })
    })
    const json = await response.json();
    if (json.success) {
      alert("Thank you providing the data");
      setname("");
      setemail("");
      setdesc("")
      setphone("")
    }
    // console.log(json);

  }
  const handleChange = (e) => {
    if (e.target.name === 'phone') {
      setphone(e.target.value)
    }
    else if (e.target.name === 'email') {
      setemail(e.target.value)
    }
    else if (e.target.name === 'name') {
      setname(e.target.value)
    }
    else if (e.target.name === 'desc') {
      setdesc(e.target.value)
    }
  }



  return (
    <div className={styles.container}>
      <h1 className={styles.contacth1}>Contact us</h1>
      <div className={styles.secContainer}>
        <form onSubmit={handleSubmit}>
          <div className={styles.mb3}>

            <label htmlFor="name" className={styles.formLabel}>Name</label>
            <input type="text" className="form-control" id="name" name="name" value={name} onChange={handleChange}
              aria-describedby="emailHelp" />
          </div>

          <div className={styles.mb3}>

            <label htmlFor="email" className={styles.formLabel}>Email address</label>
            <input type="email" className="form-control" id="email" name='email' value={email} onChange={handleChange} aria-describedby="emailHelp" />
            {/* <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div> */}
          </div>
          <div className={styles.mb3}>
            <label htmlFor="phone" className={styles.formLabel}>Phone</label>
            <input value={phone} onChange={handleChange} type="phone" className="form-control" id="phone" name='phone' />
          </div>
          <div className={styles.mb3}>
            <label className={styles.formLabel} htmlFor="floatingTextarea">Description</label>
            <textarea value={desc} onChange={handleChange} className="form-control" placeholder="write your description" id="desc" name='desc'></textarea>
          </div>
          <button type="submit" className={styles.btn}>Submit</button>
        </form>
      </div>
    </div>
  )
}
