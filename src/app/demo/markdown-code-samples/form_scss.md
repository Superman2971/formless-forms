``` css
.sample-form {
  position: relative;

  .flex-row {
    align-items: center;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
  }

  .row {
    display: grid;
    grid-gap: 24px;
    grid-template-columns: 1fr 1fr;

    @media (max-width: 600px) {
      grid-template-columns: 1fr;
    }
  }

  .pad-bottom {
    padding: 0 0 24px;
  }
}
```
