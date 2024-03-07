import type { ReactNode } from 'react'
import Link from 'next/link'
import cn from 'clsx'

import styles from './style.module.css'

export function Feature({
  large,
  centered,
  children,
  lightOnly,
  className,
  href,
  index,
  aria,
  ...props
}: {
  large?,
  centered?,
  children,
  lightOnly?,
  className?,
  href?,
  index,
  aria,
  props?
}) {
  return (
    <div
      className={cn(
        styles.feature,
        large && styles.large,
        centered && styles.centered,
        lightOnly && styles['light-only'],
        className
      )}
      {...props}
    >
      {children}
      {href ? (
        <Link className={styles.link} href={href} aria-label={aria} >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1.5em"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </Link>
      ) : null}
    </div>
  )
}

export function Features({ children }: { children: ReactNode }) {
  return <div className={styles.features}>{children}</div>
}
