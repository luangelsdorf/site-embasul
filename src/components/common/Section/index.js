import { useId } from "react"

export default function Section({
  children,
  mt = '',
  mb = '',
  pt = '',
  pb = '',
  className,
  ...rest
}) {
  let id = useId();
  id = '-' + id.replaceAll(':', '');

  return (
    <section className={`${className ? className + ' ' : ''}section${id}`} {...rest}>
      <style>
        {`
          .section${id} {
            ${mt && `margin-top: ${mt.split?.(' ')[0]}px;`}
            ${mb && `margin-bottom: ${mb.split?.(' ')[0]}px;`}
            ${pt && `padding-top: ${pt.split?.(' ')[0]}px;`}
            ${pb && `padding-bottom: ${pb.split?.(' ')[0]}px;`}
          }

          @media (max-width: 992px) {
            .section${id} {
              ${mt && `margin-top: ${mt.split?.(' ')[1]}px;`}
              ${mb && `margin-bottom: ${mb.split?.(' ')[1]}px;`}
              ${pt && `padding-top: ${pt.split?.(' ')[1]}px;`}
              ${pb && `padding-bottom: ${pb.split?.(' ')[1]}px;`}
            }
          }
        `}
      </style>

      {children}
    </section>
  )
}