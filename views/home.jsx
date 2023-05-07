const React = require('react')
const Def = require('./default')

function home () {
    return (
        <Def>
            <main>
                <h1>HOME</h1>
                <div>
                    <img src="/images/bowl-of-vegetables.jpg" alt="Bowl of Vegetables"/>
                    <div>
                        Photo by <a href="https://unsplash.com/@annapelzer?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Anna Pelzer</a> on <a href="https://unsplash.com/photos/IGfIGP5ONV0?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
                    </div>
                </div>
                <a href="/places">
                    <button className="btn-primary">Places Page</button>
                </a>
            </main>
        </Def>
    )
}

module.exports = home