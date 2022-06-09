export default function useId(
  id,
  genIdFunc = () => {
    let idvals = Object.values(
      "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"
    );
    let id = "";
    for (let i = 0; i < 15; i++) {
      id += idvals[Math.floor(Math.random() * idvals.length)];
    }
    return `lfhooksidgen#${id}`;
  }
) {
    return (id && typeof id == "string")?id:genIdFunc();
}
