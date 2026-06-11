/* Buttons.jsx — three button variants */

function PrimaryButton({ children, onClick, arrow = false, ...rest }) {
  return (
    <button className="btn btn-primary" onClick={onClick} {...rest}>
      {children} {arrow && <span aria-hidden>→</span>}
    </button>
  );
}

function GhostButton({ children, onClick, ...rest }) {
  return (
    <button className="btn btn-ghost" onClick={onClick} {...rest}>
      {children}
    </button>
  );
}

function TextLink({ children, onClick, ...rest }) {
  return (
    <button className="btn btn-text" onClick={onClick} {...rest}>
      {children} <span aria-hidden>→</span>
    </button>
  );
}

Object.assign(window, { PrimaryButton, GhostButton, TextLink });
