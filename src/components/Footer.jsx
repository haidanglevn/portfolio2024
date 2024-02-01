import "../styles/Footer.css";
import { IconButton } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import MailIcon from "@mui/icons-material/Mail";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="contact">
      <div className="contact-title" style={{ margin: "20px 0" }}>
        <p>
          <h2>Let's get in touch!</h2>
          Did I pique your interest? Please feel free to reach out using any of
          the following methods:{" "}
        </p>
        <div className="link-stack">
          <div className={"link"}>
            <IconButton
              sx={{
                backgroundColor: "var(--gray-color)",
                color: "var(--secondary-color)",
                height: "54px",
                width: "54px",
                transition: "all 1s",
                "&:hover": {
                  backgroundColor: "var(--secondary-color)",
                  color: "black",
                },
              }}
            >
              <Link
                to={"https://www.linkedin.com/in/dang-le-hai/"}
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "inherit" }}
              >
                <LinkedInIcon />
              </Link>
            </IconButton>
            <h4>www.linkedin.com/in/dang-le-hai</h4>
          </div>

          <div className={"link"}>
            <IconButton
              sx={{
                backgroundColor: "var(--gray-color)",
                color: "var(--secondary-color)",
                height: "54px",
                width: "54px",
                transition: "all 1s",
                "&:hover": {
                  backgroundColor: "var(--secondary-color)",
                  color: "black",
                },
              }}
            >
              <Link
                to={"https://github.com/haidanglevn"}
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "inherit" }}
              >
                <GitHubIcon />
              </Link>
            </IconButton>{" "}
            <h4>github.com/haidanglevn</h4>
          </div>

          <div className={"link"}>
            <IconButton
              sx={{
                backgroundColor: "var(--gray-color)",
                color: "var(--secondary-color)",
                height: "54px",
                width: "54px",
                transition: "all 1s",
                "&:hover": {
                  backgroundColor: "var(--secondary-color)",
                  color: "black",
                },
              }}
            >
              <Link
                to={"mailto:haidang.levn@gmail.com"}
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "inherit" }}
              >
                <MailIcon />
              </Link>
            </IconButton>{" "}
            <h4>haidang.levn@gmail.com</h4>
          </div>
        </div>
        <div className="copyright">
          <i>© Dang Le 2024</i>
        </div>
      </div>
    </div>
  );
}

export default Footer;
