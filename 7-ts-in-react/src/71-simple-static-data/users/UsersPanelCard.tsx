import type { User } from "../model/User";

// Czemu funkcja:
UsersPanelCard.propTypes = {

}

export function UsersPanelCard({ user }: { user: User }) {
    return (
        <div className="card">
            <div className="card-image">
                <figure className="image is-4by3">
                    <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder" />
                </figure>
            </div>
            <div className="card-content">
                <div className="media">
                    <div className="media-left">
                        <figure className="image is-48x48">
                            <img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder" />
                        </figure>
                    </div>
                    <div className="media-content">
                        <p className="title is-4">{user.name}</p>
                        <p className="subtitle is-6">{user.email}</p>
                    </div>
                </div>
                <div className="content">
                    {user?.company?.catchPhrase}
                </div>
                <div className="content">
                    {user.website}
                </div>
            </div>
        </div>
    )
}

// Uwaga na takie zapisy:

/*
callMe()

const MY_VAR = 10;

function callMe() {
    console.log(MY_VAR)
}
*/