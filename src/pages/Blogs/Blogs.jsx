
const Blogs = () => {
    return (
        <div className="max-w-[580px] md:max-w-3xl lg:max-w-5xl mx-auto my-16">
            <div className="mt-8">
                <div className="collapse collapse-plus bg-base-200">
                    <input type="radio" name="my-accordion-3" checked="checked" />
                    <div className="collapse-title text-xl font-medium">
                        What is an access token and refresh token?
                    </div>
                    <div className="collapse-content">
                        <p>An access token is a short-lived credential that grants temporary access to resources after authentication. A refresh token is a longer-lived, secret credential used to obtain new access tokens when the current one expires, enabling seamless user access without re-authentication. Both are integral to secure authentication and authorization systems.</p>
                    </div>
                </div>
                <div className="collapse collapse-plus bg-base-200">
                    <input type="radio" name="my-accordion-3" />
                    <div className="collapse-title text-xl font-medium">
                        How do they work and where should we store them on the client-side?
                    </div>
                    <div className="collapse-content">
                        <p>Access tokens are used for short-term access to resources and are stored on the client side. When they expire, a refresh token, securely stored, is used to obtain a new access token without requiring re-authentication. Access tokens are stored in memory or secure storage, while refresh tokens, being more sensitive, should be securely encrypted or stored in a key vault to prevent unauthorized access. This two-token system balances security and usability in authentication and authorization.</p>
                    </div>
                </div>
                <div className="collapse collapse-plus bg-base-200">
                    <input type="radio" name="my-accordion-3" />
                    <div className="collapse-title text-xl font-medium">
                    What is express js?
                    </div>
                    <div className="collapse-content">
                        <p>Express.js is a popular web application framework for Node.js. It simplifies the development of web applications by providing a robust set of features for routing, handling HTTP requests and responses, middleware support, and more. It is widely used for building APIs and web applications, making Node.js development faster and more efficient.</p>
                    </div>
                </div>
                <div className="collapse collapse-plus bg-base-200">
                    <input type="radio" name="my-accordion-3" />
                    <div className="collapse-title text-xl font-medium">
                    What is Nest JS ?

                    </div>
                    <div className="collapse-content">
                        <p>NestJS is a progressive Node.js framework that utilizes TypeScript to simplify the development of scalable and maintainable server-side applications. Inspired by Angular, it offers a modular and structured approach for building web applications and APIs, with built-in support for dependency injection, decorators, and robust tooling for creating enterprise-grade projects.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blogs;