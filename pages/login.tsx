import { signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";

const LoginPage = () => {
  const { data: session } = useSession();

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        background: "linear-gradient(90deg, #d7d8db, #0b1024)",
        fontFamily: "'Poppins', sans-serif",
        color: "#fff",
        textAlign: "center",
        overflow: "hidden",
        padding: "20px",
      }}
    >
      {!session ? (
        <>
          <h1
            style={{
              fontSize: "3rem",
              marginBottom: "1rem",
              animation: "fadeInDown 1s ease-in-out",
            }}
          >
            Welcome to Login!
          </h1>
          <p
            style={{
              fontSize: "1.2rem",
              marginBottom: "2rem",
              animation: "fadeInUp 1s ease-in-out",
            }}
          >
            Sign in to explore your personalized dashboard and IT resources!
          </p>
          <button
            style={{
              padding: "15px 30px",
              fontSize: "1.1rem",
              fontWeight: "bold",
              color: "#fff",
              backgroundColor: "#0070f3",
              border: "none",
              borderRadius: "8px",
              cursor: "pointer",
              marginBottom: "1rem",
              boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
              transition: "all 0.3s ease-in-out",
              animation: "fadeIn 1.5s ease-in-out",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "#005bb5";
              e.currentTarget.style.transform = "scale(1.05)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "#0070f3";
              e.currentTarget.style.transform = "scale(1)";
            }}
            onClick={() => signIn("github")}
          >
            Sign in with GitHub
          </button>
        </>
      ) : (
        <>
          <h1
            style={{
              fontSize: "2rem",
              marginBottom: "1rem",
              animation: "fadeInDown 1s ease-in-out",
            }}
          >
            Welcome, {session.user?.name || "User"}!
          </h1>
          <p
            style={{
              fontSize: "1.2rem",
              marginBottom: "2rem",
              animation: "fadeInUp 1s ease-in-out",
            }}
          >
            You are now logged in.
          </p>
          <Image
            src={session?.user?.image || "/default-avatar.png"}
            alt="User Profile"
            width={100}
            height={100}
            style={{
              borderRadius: "50%",
              marginBottom: "1rem",
              boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
              animation: "fadeIn 1.5s ease-in-out",
            }}
            priority
          />
          <button
            style={{
              padding: "15px 30px",
              fontSize: "1.1rem",
              fontWeight: "bold",
              color: "#fff",
              backgroundColor: "#d9534f",
              border: "none",
              borderRadius: "8px",
              cursor: "pointer",
              boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
              transition: "all 0.3s ease-in-out",
              animation: "fadeIn 1.5s ease-in-out",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "#c9302c";
              e.currentTarget.style.transform = "scale(1.05)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "#d9534f";
              e.currentTarget.style.transform = "scale(1)";
            }}
            onClick={() => signOut()}
          >
            Logout
          </button>

          <button
        style={{
          marginTop: "2rem",
          padding: "10px 20px",
          fontSize: "1rem",
          fontWeight: "bold",
          color: "#fff",
          backgroundColor: "#22c55e",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
          boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
          transition: "all 0.3s ease-in-out",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.backgroundColor = "#16a34a";
          e.currentTarget.style.transform = "scale(1.05)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.backgroundColor = "#22c55e";
          e.currentTarget.style.transform = "scale(1)";
        }}
        onClick={() => window.location.replace("/")} // Redirect to the homepage
      >
        Back to Home
      </button>
        </>
      )}
    </div>
  );
};

export default LoginPage;
