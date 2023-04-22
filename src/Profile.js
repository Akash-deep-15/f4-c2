import React, { useState, useEffect } from "react"

const Profile = ({ id }) => {
    const [data, setData] = useState({})
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        async function fetchDetails() {
            try {
                const response = await fetch(
                    `https://dummyjson.com/users/${id}`
                )
                const data = await response.json()
                console.log(data)
                setData(data)
                setLoading(false)
            } catch (error) {
                console.log(error)
                setError(error)
                setLoading(false)
            }
        }
        fetchDetails()
    }, [id])

    if (loading) {
        return (
            <div className="loader">
                <p className="custom-loader">Loading...</p>
            </div>
        )
    }

    if (error) {
        return <p className="error-box">Error: {error.message}</p>
    }

    return (
        <div className="box">
            <div className="name-img">
                <h1>
                    {data?.firstName} {data.lastName}
                </h1>
                <img src={data.image} alt="" />
            </div>
            <p>
                <span className="key">Email:</span>{" "}
                <span className="value">{data.email}</span>
            </p>
            <p>
                <span className="key">Phone:</span>{" "}
                <span className="value">{data.phone}</span>
            </p>
            <p>
                <span className="key">Username:</span>{" "}
                <span className="value">{data.username}</span>
            </p>
            <p>
                <span className="key">Birthday:</span>{" "}
                <span className="value">{data.birthDate}</span>
            </p>
            <p>
                <span className="key">Gender:</span>{" "}
                <span className="value">{data.gender}</span>
            </p>
            <p>
                <span className="key">Address:</span>{" "}
                <span className="value">
                    {data.address.address}, {data.address.city},{" "}
                    {data.address.state} {data.address.postalCode}
                </span>
            </p>
            <p>
                <span className="key">University:</span>{" "}
                <span className="value">{data.university}</span>
            </p>
            <p>
                <span className="key">Company:</span>{" "}
                <span className="value">{data.company.name}</span>
            </p>
            <p>
                <span className="key">Job Title:</span>{" "}
                <span className="value">{data.company.title}</span>
            </p>
            <p>
                <span className="key">Department:</span>{" "}
                <span className="value">{data.company.department}</span>
            </p>
            <p>
                <span className="key">Height:</span>{" "}
                <span className="value">{data.height}cm</span>
            </p>
            <p>
                <span className="key">Weight:</span>{" "}
                <span className="value">{data.weight}kg</span>
            </p>
            <p>
                <span className="key">Eye Color:</span>{" "}
                <span className="value">{data.eyeColor}</span>
            </p>
            <p>
                <span className="key">Hair Color:</span>{" "}
                <span className="value">{data.hair.color}</span>
            </p>
            <p>
                <span className="key">Hair Type:</span>{" "}
                <span className="value">{data.hair.type}</span>
            </p>
            <p>
                <span className="key">Blood Group:</span>{" "}
                <span className="value">{data.bloodGroup}</span>
            </p>
        </div>
    )
}

export default Profile